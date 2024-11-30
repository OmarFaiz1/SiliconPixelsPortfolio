const Button = ({ text, link }) => {
  return (
    <a
      href={link}
      className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      {text}
    </a>
  );
};

export { Button };
