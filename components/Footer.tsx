const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-green-950 text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center">
        <p className="text-center sm:text-left text-sm sm:text-base">
          &copy; 2022 • Daffodil International University
        </p>
        <div className="ml-3 hidden sm:block">•</div>
        <a
          href="https://dslab.daffodilvarsity.edu.bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 sm:mt-0 text-teal-500 hover:text-teal-300 py-2 px-4 rounded text-sm "
        >
          Daffodil International University Data Science Lab
        </a>
      </div>
    </footer>
  );
};

export default Footer;
