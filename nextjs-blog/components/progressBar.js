import React, { useState } from "react";
import { Progress } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";
import styles from "./progressBar.module.css"

export default function Bar() {
    function decrease(){
        console.log('hello')
    }
    function increase(){
        console.log('hello')
    }

  return (
    <div>
      <main>
          <div className={styles.mainContainer}>
            <h1>eaas</h1>
            <Progress color="pink" height="32px" value={50} hasStripe isAnimated/>
            <div className={styles.buttonContainer}>
                <IconButton onClick={decrease()} variantColor="teal" aria-label="Decrease Progress" size="lg" icon="arrow-back"/>
                <IconButton onClick={increase()} variantColor="teal" aria-label="Increase Progress" size="lg" icon="arrow-forward"/>
            </div>
          </div>
      </main>
    </div>
  )
}