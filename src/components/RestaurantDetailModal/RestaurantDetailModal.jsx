
export default function RestaurantDetailModal({restaurants, onCloseModal}){
    return(
        <div className="modal modal--open">
            <div className="modal-backdrop" 
                onClick={onCloseModal}></div>
            <div className="modal-container">
                <h2 className="modal-title text-title">{restaurants.name}</h2>
                <div className="restaurant-info">
                <p className="restaurant-info__description text-body">{restaurants.description}</p>
                </div>
                <div className="button-container">
                <button className="button button--primary text-caption"
                    onClick={onCloseModal}>닫기</button>
                </div>
            </div>
        </div>
    )
}
