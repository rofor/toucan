#!/usr/bin/python3
from influxdb import InfluxDBClient
import obd
import time

connection = obd.Async()
client = InfluxDBClient(host='localhost', port=8086, database='toucan')

# callbacks for each sensor
def new_speed(r):
    speed = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "speed": speed
                }
        }
        ]
    client.write_points(message)
    
def new_rpm(r):
    rpm = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "rpm": rpm
                }
        }
        ]
    client.write_points(message)
    
def new_engine_load(r):
    engine_load = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "engine_load": engine_load
                }
        }
        ]
    client.write_points(message)
    
def new_coolant_temp(r):
    coolant_temp = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "coolant_temp": coolant_temp
                }
        }
        ]
    client.write_points(message)
     
def new_intake_pressure(r):
    intake_pressure = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "intake_pressure": intake_pressure
                }
        }
        ]
    client.write_points(message)
    
def new_intake_temp(r):
    intake_temp = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "intake_temp": intake_temp
                }
        }
        ]
    client.write_points(message)
    
def new_maf(r):
    maf = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "maf": maf
                }
        }
        ]
    client.write_points(message)
    
def new_distance_w_mil(r):
    distance_w_mil = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "distance_w_mil": distance_w_mil
                }
        }
        ]
    client.write_points(message)
    
def new_fuel_rail_pressure_direct(r):
    fuel_rail_pressure_direct =  r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "fuel_rail_pressure_direct": fuel_rail_pressure_direct
                }
        }
        ]
    client.write_points(message)
    
def new_commanded_egr(r):
    commanded_egr = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "commanded_egr": commanded_egr
                }
        }
        ]
    client.write_points(message)
    
def new_fuel_level(r):
    fuel_level = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "fuel_level": fuel_level
                }
        }
        ]
    client.write_points(message)
    
def new_barometric_pressure(r):
    barometric_pressure = r.value.magnitude
    message = [
        {
            "measurement": "obd",
                "fields": {
                    "barometric_pressure": barometric_pressure
                }
        }
        ]
    client.write_points(message)

    
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