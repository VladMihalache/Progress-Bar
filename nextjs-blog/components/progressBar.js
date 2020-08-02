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
            <h1>eaas</h1>
            <Progress className={styles.bar} color="pink" height="32px" value={progressValue} hasStripe isAnimated/>
            <div className={styles.buttonContainer}>
                <IconButton className={styles.left} onClick={() => setProgress(progressValue - 10)} variantColor="pink" aria-label="Decrease Progress" size="lg" icon="arrow-back"/>
                <IconButton className={styles.right} onClick={() => setProgress(progressValue + 10)} variantColor="pink" aria-label="Increase Progress" size="lg" icon="arrow-forward"/>
            </div>
          </div>
      </main>
    </div>
  )
}