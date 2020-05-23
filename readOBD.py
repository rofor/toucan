#!/usr/bin/python3
import obd
import time

# define variables
connection = obd.Async("/dev/ttyUSB1")

# callbacks for each sensor
def new_speed(r):
    speed = r.value.magnitude
    message = {
            "speed": speed
                }
    print(message)
    
def new_rpm(r):
    rpm = r.value.magnitude
    message = {
            "rpm": rpm
                }
    print(message)
    
def new_engine_load(r):
    engine_load = r.value.magnitude
    message = {
            "engine_load": engine_load
                }
    print(message)
    
def new_coolant_temp(r):
    coolant_temp = r.value.magnitude
    message = {
            "coolant_temp": coolant_temp
                }
    print(message)
     
def new_intake_pressure(r):
    intake_pressure = r.value.magnitude
    message = {
            "intake_pressure": intake_pressure
                }
    print(message)
    
def new_intake_temp(r):
    intake_temp = r.value.magnitude
    message = {
            "intake_temp": intake_temp
                }
    print(message)
    
def new_maf(r):
    maf = r.value.magnitude
    message = {
            "maf": maf
                }
    print(message)
    
def new_distance_w_mil(r):
    distance_w_mil = r.value.magnitude
    message = {
            "distance_w_mil": distance_w_mil
                }
    print(message)
    
def new_fuel_rail_pressure_direct(r):
    fuel_rail_pressure_direct =  r.value.magnitude
    message = {
            "fuel_rail_pressure_direct": fuel_rail_pressure_direct
                }
    print(message)
    
def new_commanded_egr(r):
    commanded_egr = r.value.magnitude
    message = {
            "commanded_egr": commanded_egr
                }
    print(message)
    
def new_fuel_level(r):
    fuel_level = r.value.magnitude
    message = {
            "fuel_level": fuel_level
                }
    print(message)
    
def new_barometric_pressure(r):
    barometric_pressure = r.value.magnitude
    message = {
            "barometric_pressure": barometric_pressure
                }
    print(message)

    
# callbacks will fire upon receipt of new values
connection.watch(obd.commands.SPEED, callback=new_speed)
connection.watch(obd.commands.RPM, callback=new_rpm)
connection.watch(obd.commands.ENGINE_LOAD, callback=new_engine_load)
connection.watch(obd.commands.COOLANT_TEMP, callback=new_coolant_temp)
connection.watch(obd.commands.INTAKE_PRESSURE, callback=new_intake_pressure)
connection.watch(obd.commands.INTAKE_TEMP, callback=new_intake_temp)
connection.watch(obd.commands.MAF, callback=new_maf)
connection.watch(obd.commands.DISTANCE_W_MIL, callback=new_distance_w_mil)
connection.watch(obd.commands.FUEL_RAIL_PRESSURE_DIRECT, callback=new_fuel_rail_pressure_direct)
connection.watch(obd.commands.COMMANDED_EGR, callback=new_commanded_egr)
connection.watch(obd.commands.FUEL_LEVEL, callback=new_fuel_level)
connection.watch(obd.commands.BAROMETRIC_PRESSURE, callback=new_barometric_pressure)

# start connection
connection.start()

time.sleep(60000)
connection.stop()