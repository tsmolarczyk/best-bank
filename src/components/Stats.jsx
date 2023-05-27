import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex flex-1 justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold xs:text-[40] text-[30px] xs:leading-[53px] leading-[43px] text-white m-3">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
