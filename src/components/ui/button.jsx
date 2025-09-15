import React from 'react'

const Button = ({ children, onClick, disabled = false, ...props }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            {...props}
        >
            {children}
        </button>
    )
}

export default Button