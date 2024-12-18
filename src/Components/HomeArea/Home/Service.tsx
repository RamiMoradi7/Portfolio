type ServiceProps = {
  title: string;
  content: string;
  icon: JSX.Element;
};

export default function Service({
  content,
  title,
  icon,
}: ServiceProps): JSX.Element {
  return (
    <div
      data-aos="zoom-in"
      className="flex flex-col sm:flex-row items-start p-5 bg-gray-50 dark:bg-dark-second sm:me-5 mb-10 rounded-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="sm:w-1/6 text-center mb-4 sm:mb-0">
        <div className="flex justify-center items-center h-12 w-12 rounded-full bg-gradient-to-br from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
          {icon}
        </div>
      </div>
      <div className="sm:w-5/6">
        <h3 className="text-xl mb-2 font-bold bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
          {title}
        </h3>
        <p className="leading-6 dark:text-dark-txt">{content}</p>
      </div>
    </div>
  );
}
