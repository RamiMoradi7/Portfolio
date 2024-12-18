export default function ClickMeBtn(): JSX.Element {
  return (
    <div className="mt-6 flex justify-center animate-bounce">
      <p
        className=" bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7] font-bold rounded-full
        hover:scale-110 hover:shadow-lg transition-transform transform duration-300 ease-in-out
        focus:outline-none focus:ring-4  ml-4"
      >
        See Details
      </p>
    </div>
  );
}
