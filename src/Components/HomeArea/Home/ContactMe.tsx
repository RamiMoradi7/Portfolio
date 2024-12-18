import ContactMeForm from "./ContactMeForm";

export default function ContactMe(): JSX.Element {
  return (
    <section
      id="contact"
      className="sm:p-20  p-8 bg-gray-100 dark:bg-dark-main"
    >
      <div className="container mx-auto">
        <h2 className=" mb-2 text-center font-header font-thin uppercase bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] text-4xl md:text-5xl   mb-10 font-raleway  sm:text-5xl lg:text-6xl">
          Contact Me
        </h2>
        <div className="flex flex-wrap -mx-4">
          <div className="sm:w-1/2 w-full px-4 mb-8 sm:mb-0 dark:bg-dark-second p-6 bg-gray-50">
            <div className="mb-8">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40 dark:text-dark-txt"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg dark:text-dark-txt">
                  Phone
                </p>
              </div>
              <a
                className="text-gray-600 dark:text-gray-400 mt-2 block hover:underline"
                href="https://wa.me/+9720506070102"
              >
                +9720506070102
              </a>
            </div>

            <div className="mb-8">
              <div className="flex items-center">
                <i className=" bx bx-envelope text-2xl text-grey-40 dark:text-dark-txt"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg dark:text-dark-txt">
                  Email
                </p>
              </div>
              <a
                className="text-gray-600  dark:text-gray-400 mt-2 block hover:underline"
                href="mailto:Ramimoradilg4@gmail.com"
              >
                Ramimoradilg4@gmail.com
              </a>
            </div>

            <div className="mb-8">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40 dark:text-dark-txt"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg dark:text-dark-txt">
                  My Address
                </p>
              </div>
              <a className="text-gray-600 dark:text-gray-400 mt-2 block hover:underline">
                Israel, Ra'anana
              </a>
              <div
                className="relative w-full h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=34.82717514038087%2C32.15904704519386%2C34.92218971252442%2C32.22028052991974&amp;layer=mapnik"
                ></iframe>
                <br />
                <small>
                  <a href="https://www.openstreetmap.org/#map=15/32.18733/34.87221">
                    צפייה במפה גדולה יותר
                  </a>
                </small>
              </div>
              <small className="block mt-2 text-center">
                <a
                  className="text-blue-600 hover:underline"
                  href="https://www.openstreetmap.org/#map=14/32.18967/34.87477"
                >
                  צפייה במפה גדולה יותר
                </a>
              </small>
            </div>
          </div>
          <ContactMeForm />
        </div>
      </div>
    </section>
  );
}
