import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/youri.jpg"
          alt="Een image van Youri"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi im Youri</h1>
      <p>
        Mijn blog gaat over web development - in het speciaal Angular of React
      </p>
    </section>
  );
}

export default Hero;
