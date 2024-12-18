export default function AboutMe(): JSX.Element {
  return (
    <>
      <section
        id="about"
        className="sm:p-10 lg:p-20 bg-gray-50 dark:bg-dark-second dark:text-dark-txt"
        data-aos="fade-down"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-16">
          <div className="lg:w-1/2">
            <p className="font-raleway text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
              I'm Passionate About Building Scalable, High-Performing Web
              Solutions
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Hello there! I'm a Full Stack Web Developer, passionate about
              building scalable and efficient web solutions. My goal is to
              deliver clean and user-friendly applications that create value for
              businesses.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              With expertise in React.js, NodeJS, and MongoDB, I bring
              innovative approaches to web development, ensuring
              high-performance solutions. I have a strong learning ability,
              allowing me to adapt quickly to new technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I am a team player, work well under pressure and eager to create
              quality products that brings high value to customers.
            </p>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-gradient-to-br from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl text-center text-white font-bold mb-6">
                Why Work With Me?
              </h3>
              <ul className="text-white space-y-4">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="mr-3 text-green-400"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Creative Problem Solver
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="mr-3 text-green-400"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Dedicated to Quality & Performance
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="mr-3 text-green-400"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Fast Learner, Constantly Evolving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
