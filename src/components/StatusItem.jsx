import checkIcon from "../assets/checkIcon.png";
import xIcon from "../assets/xIcon.png";

// Component con để tái sử dụng cho các dòng có icon
const StatusItem = ({ key, text, type = "check" }) => {
  const isCheck = type === "check" ? checkIcon : xIcon;
  const colorText = type === "check" ? "text-[#0c7c00]" : "text-[#a60003]";

  return (
    <li
      key={key}
      className={`list-none ${colorText} font-medium text-lg font-nunito leading-[1.3] pl-[32px] bg-no-repeat bg-left-top bg-[length:20px]`}
      style={{ backgroundImage: `url(${isCheck})` }}
    >
      {text}
    </li>
  );
};

export default StatusItem;
