import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <div
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}
  >
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-1 ${styles.flexCenter}`}>
        <h4>{stat.value} </h4>
        <h4 className="ml-2 text-gradient uppercase"> {stat.title}</h4>
        <p>|</p>
      </div>
    ))}
  </div>
);

export default Stats;
