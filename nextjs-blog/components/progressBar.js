import React, { useState } from "react";
import { Progress } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";
import styles from "./progressBar.module.css"

export default function Bar() {
    const [progressValue, setProgress] = useState(30);

  return (
    <div>
      <main>
          <div className={styles.mainContainer}>
            <div className={styles.barContainer}>
              <Progress 
                className={styles.bar}
                color="pink" 
                height="32px" 
                value={progressValue} 
                hasStripe 
                isAnimated/>
            </div>
            <div className={styles.buttonContainer}>
              <IconButton 
                className={styles.left} 
                onClick={() => {if(progressValue>0)setProgress(progressValue - 10)}} 
                variantColor="pink" 
                aria-label="Decrease Progress" 
                size="lg" 
                icon="arrow-back"/>
              <IconButton 
                className={styles.right}
                onClick={() => {if(progressValue<100)setProgress(progressValue + 10)}} 
                variantColor="pink" 
                aria-label="Increase Progress"
                size="lg" icon="arrow-forward"/>
            </div>
          </div>
      </main>
    </div>
  )
}