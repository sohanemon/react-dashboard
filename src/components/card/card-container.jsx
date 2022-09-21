import { GiMoneyStack, GiShoppingBag } from "react-icons/gi";
import { MdNoteAlt, MdOutlineGroups } from "react-icons/md";
import SmallCard from "./small-card";

export default function CardContainer() {
  return (
    <>
      <div className='flex justify-evenly my-10 items-center'>
        <SmallCard value={54} title='customers' icon={<MdOutlineGroups />} />
        <SmallCard value={79} title='projects' icon={<MdNoteAlt />} />
        <SmallCard value={124} title='orders' icon={<GiShoppingBag />} />
        <SmallCard value={"$6k"} title='Income' icon={<GiMoneyStack />} />
      </div>
    </>
  );
}
