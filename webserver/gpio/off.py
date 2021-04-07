import RPi.GPIO as gpio
gpio.setmode(gpio.BOARD)

ledPin = 40
gpio.setup(ledPin, gpio.OUT)
gpio.output(ledPin, gpio.LOW)
