const Contact = () => {
    return (
        <div className="contact-section max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10 text-center transition hover:shadow-lg">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>

            <p className="text-gray-600 mb-2">
                This is a sample Contact Us page for our React application.
            </p>

            <p className="text-gray-600 mb-6">
                If you have any questions, feel free to reach out to us!
            </p>
            <form className="space-y-4">
                <input className="border border-gray-600 px-4 py-2 rounded w-full"
                    placeholder="Your Name"
                    type="text">
                </input>
                <input className="border border-gray-600 px-4 py-2 rounded w-full"
                    placeholder="Contact Number"
                    type="text">
                </input>
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;