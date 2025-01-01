interface WebtoonPageProps {
  onClick: () => any; // Define the type for the onClick prop
}

const WebtoonPage: React.FC<WebtoonPageProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col md:flex-row gap-5 p-5 rounded-lg w-full justify-center bg-[#fbe6f7]">
        <img src="/webtoon.png" alt="webtoon" className="md:w-2/5" />
        <div>
          <h1 className="font-bold text-3xl">Short Story</h1>
          <br />
          <p>
            เรื่องนี้เป็นเรื่องเกี่ยวกับฉันเมื่อเราอยู่ด้วยกัน
            ถ้าฉันอยู่คนเดียวฉันก็มักจะคิดถึงคุณเหมือนคุณกำลังทำอะไรอยู่หรือกินข้าวหรือยัง
            55555
            ฉันมีความสุขทุกครั้งที่คุณต้องการไปกับฉันและคุณก็ดูมีความสุขเหมือนกันบางครั้งฉันก็ทำให้คุณเสียใจ
            55555 และ
            บางทีคุณอาจไม่รู้ว่าคุณนำสีสันมาสู่ชีวิตของฉันหรือไม่และมาสร้างเรื่องราวดีๆด้วยกัน
            <br />
            Last but not least, Happy New Year My Bibu. I didn't expect to have
            you in this year and it is the greatest gift of this year. Because
            you once said that girls will like someone from 0 to 100, so my wish
            is to make it 100 hahahaha.
            <br />
            Tbh, I don't know my translation is correct or not 55555
          </p>
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

export default WebtoonPage;
