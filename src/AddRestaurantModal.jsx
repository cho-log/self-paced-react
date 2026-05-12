import { useState } from 'react';

export default function AddRestaurantModal({
	onAddRestaurant,
	setIsAddModalOpen,
}) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleCloseModal = () => {
		setIsAddModalOpen(false);
	};

	const handleAddRestaurant = async (e) => {
		e.preventDefault();
		const form = e.target;
		const category = form.category.value;
		const name = form.name.value;
		const description = form.description.value;

		const newRestaurant = {
			id: `a${Date.now()}`,
			category,
			name,
			description,
		};

		setIsSubmitting(true);

		try {
			const isAdded = await onAddRestaurant(newRestaurant);

			if (isAdded) {
				form.reset();
				handleCloseModal();
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="modal modal--open">
			<div className="modal-backdrop" onClick={handleCloseModal}></div>
			<div className="modal-container">
				<h2 className="modal-title text-title">새로운 음식점</h2>
				<form onSubmit={handleAddRestaurant}>
					<div className="form-item form-item--required">
						<label htmlFor="category" className="text-caption">
							카테고리
						</label>
						<select name="category" id="category" required>
							<option value="">선택해 주세요</option>
							<option value="한식">한식</option>
							<option value="중식">중식</option>
							<option value="일식">일식</option>
							<option value="양식">양식</option>
							<option value="아시안">아시안</option>
							<option value="기타">기타</option>
						</select>
					</div>

					<div className="form-item form-item--required">
						<label htmlFor="name" className="text-caption">
							이름
						</label>
						<input type="text" name="name" id="name" required />
					</div>

					<div className="form-item">
						<label htmlFor="description" className="text-caption">
							설명
						</label>
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="5"></textarea>
						<span className="help-text text-caption">
							메뉴 등 추가 정보를 입력해 주세요.
						</span>
					</div>

					<div className="button-container">
						<button
							className="button button--primary text-caption"
							type="submit"
							disabled={isSubmitting}>
							{isSubmitting ? '추가 중...' : '추가하기'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
