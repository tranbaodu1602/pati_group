import customerprenium from "../assets/customer.avif";

const Feedback = ({ name, avatar, rating, title, feedback }) => {
  return (
    <div className=" max-w-[650px] font-sans ">
      {/* Header: Avatar và Thông tin */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-[13%] rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <div className="flex items-center text-base gap-2 leading-5">
            <span>{name}</span>
            <span>
              <img src={customerprenium} alt="" className="max-w-[120px] " />
            </span>
          </div>
          <div>
            <img
              src={rating}
              alt="rating"
              className="max-w-[100px] block mt-1.5"
            />
          </div>
        </div>
      </div>

      {/* Body: Nội dung đánh giá */}
      <div className="space-y-3">
        <h5 className=" text-[#1A1A1A] font-medium text-base tracking-tight">
          {title}
        </h5>
        <p className="text-black leading-[1.6] text-[14px]">{feedback}</p>
      </div>
    </div>
  );
};

export default Feedback;
