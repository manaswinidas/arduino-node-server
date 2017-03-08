# node-arduino-remote
Remote control a tethered arduino using a nodejs server

Uses ExpressJS and serialport-js for communication with arduino.

This is a proof of concept project. It controls a small LED attached to an arduino via a rest api exposed by a host system.

Arduino setup

Flash the following code. Code is very self explanatory.

````c

int led = 13;
int state = 1;

// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
  Serial.begin(9600);
  digitalWrite(led, HIGH);
  state = 1;
  Serial.println("ON");
}

// the loop routine runs over and over again forever:
void loop() {
  if(Serial.available()) {  
    switch(Serial.parseInt()) {
      case 1:
        digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
        state = 1;
        Serial.println("ON");
        break;
      case 0:
        digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
        state = 0;
        Serial.println("OFF");
        break;
      case 2:
          Serial.println(state ? "ON" : "OFF");
        
    }
  }
  
}
````

Demo

Clone the code and chdir into the cloned directory.

Install the dependencies
````bash
$ npm install
````
Start the server
````bash
$ ./bin/www
````
Open localhost:3000 on your browser. Press ON or OFF to control a LED attached to pin no 13.

TODO:
1. Move server code into arduino and communicate using a  WiFi Shield
