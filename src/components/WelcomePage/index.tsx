import Image from "next/image";

interface WelcomePageProps {
  onClick: () => any; // Define the type for the onClick prop
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-full md:h-screen w-full bg-[#fbe6f7] flex flex-col md:flex-row justify-center rounded-xl md:relative">
        <div className="w-full md:w-1/2 h-full max-h-52 grid grid-flow-col place-items-center md:place-items-start px-5 pt-10 md:absolute md:bottom-0 md:left-0">
          <img
            src="/mymelody.png"
            alt="mymelody1"
            className="h-auto max-h-[calc(100%-2rem)]"
          />
          <img
            src="/mymelody2.png"
            alt="mymelody2"
            className="h-auto max-h-[calc(100%-2rem)]"
          />
          <img
            src="/mymelody3.png"
            alt="mymelody3"
            className="h-auto max-h-[calc(100%-2rem)]"
          />
        </div>
        <div className="w-full flex items-center p-10  md:mt-0 text-center md:text-left">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-[4rem] font-bold leading-none ">
              Holla Bibu
            </h1>
            <br />
            <h2 className="text-xl">
              นี่ไม่ใช่แค่สมุดภาพธรรมดาๆ แต่เป็นส่วนเล็กๆ ของโลกเรา
              ที่เรื่องราวความรักของเราโลดแล่นอยู่ในนั้น
              ลองจินตนาการถึงการพลิกหน้ากระดาษที่เต็มไปด้วยรอยยิ้ม
              เรื่องตลกภายใน และความทรงจำที่ทำให้หัวใจของเราอบอุ่น
              มันเหมือนกับการได้รับกอดจากอดีต
              คอยเตือนใจถึงช่วงเวลาอันแสนวิเศษที่เราได้ร่วมกันสร้างสรรค์
            </h2>
          </div>
        </div>
        <div className="w-full h-full flex items-end justify-center ">
          <img
            src="/numpun_cartoon.png"
            alt="numpun"
            className="h-full md:h-4/5"
          />
        </div>
      </div>
      <button className="btn btn-circle btn-outline mt-5 p-2" onClick={onClick}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11.9297 2V22"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
            <path
              d="M19 16L14 21.1599C13.7437 21.4336 13.434 21.6519 13.0899 21.801C12.7459 21.9502 12.375 22.0271 12 22.0271C11.625 22.0271 11.2541 21.9502 10.9101 21.801C10.566 21.6519 10.2563 21.4336 10 21.1599L5 16"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default WelcomePage;
