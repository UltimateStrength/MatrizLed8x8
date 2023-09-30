# INFO
**This is a pixel converter for 8x8 LED matrix**

`To use it, click on the link:`

https://ultimatestrength.github.io/MatrizLed8x8/

--------------------------------------------------

# ALERT
**All code is commented in portuguese**

--------------------------------------------------

# HELP WITH THE CODE
**The site will generate a code similar to this:**
```cpp
B00000000,
B00000000,
B00000000,
B00000000,
B00000000,
B00000000,
B00000000,
B00000000,
```

**If you DON'T have the structure of a code for an 8x8 led matrix, you can use this code:**
```cpp
// VCC = 5v   //
  // GND = GND  //
// DIN = 8    //
  // CS  = 9    //
// CLK = 10   //

  // Bibliotecas //

#include "LedControl.h"

  // Definindo Portas //
LedControl lc = LedControl(8, 10, 9, 1);

  // Desenho na Matriz //
byte Art[] = {

    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    B00000000,
    
  };

  // Void Setup //
void setup() {

    lc.shutdown(0, false);
    lc.setIntensity(0, 10);
    lc.clearDisplay(0);

  }

  // Void Loop //
void loop() {

    showArt();
    delay(500);

  }

  // Função Desenho //
void showArt() {

    for (int i = 0; i < 8; i++) {
    lc.setRow(0, i, Art[i]);

      }

  }
```

--------------------------------------------------

# HOW TO USE
**If you don't know how to assemble your Arduino with the matrix, you can follow this image below:**

`Note: the matrix may change depending on the model you purchased!`

![howtouse](/assets/montagem.jpg "howtouseimage")
