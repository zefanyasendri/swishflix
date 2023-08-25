export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`text-base block mb-2` + className}>
            {value ? value : children}
        </label>
    );
}
