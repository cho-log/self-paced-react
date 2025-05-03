export default function CategoryModal({ name, category }) {
    return (
        <option value={category} >
            {name}
        </option >
    );
}