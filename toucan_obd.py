#!/usr/bin/python3
from influxdb import InfluxDBClient
import time
import obd

# ssd for pi
# continually reconnect? 
# add other sensors
# own network hard wired
 
def get_speed():
    cmd = obd.commands.SPEED
    response = connection.query(cmd)
    return(response.value.magnitude)
    

def get_rpm():
    cmd = obd.commands.RPM
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_engine_load():
    cmd = obd.commands.ENGINE_LOAD
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_coolant_temp():
    cmd = obd.commands.COOLANT_TEMP
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_intake_pressure():
    cmd = obd.commands.INTAKE_PRESSURE
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_intake_temp():
    cmd = obd.commands.INTAKE_TEMP
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_maf():
    cmd = obd.commands.MAF
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_distance_w_mil():
    cmd = obd.commands.DISTANCE_W_MIL
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_fuel_rail_pressure_direct():
    cmd = obd.commands.FUEL_RAIL_PRESSURE_DIRECT
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_commander_egr():
    cmd = obd.commands.COMMANDED_EGR
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_fuel_level():
    cmd = obd.commands.FUEL_LEVEL
    response = connection.query(cmd)
    return(response.value.magnitude)


def get_barometric_pressure():
    cmd = obd.commands.BAROMETRIC_PRESSURE
    response = connection.query(cmd)
    return(response.value.magnitude)

if __name__ == '__main__':
    connection = obd.OBD()
    while True:
        speed = get_speed()
        rpm = get_rpm()
        engine_load = get_engine_load()
        coolant_temp = get_coolant_temp()
        intake_pressure = get_intake_pressure()
        intake_temp =  get_intake_temp()
        maf = get_maf()
        distance_w_mil = get_distance_w_mil()
        fuel_rail_pressure_direct = get_fuel_rail_pressure_direct()
        commander_egr = get_commander_egr()
        fuel_level = get_fuel_level()
        barometric_pressure = get_barometric_pressure()
    
        json_body = [
            {
                "measurement": "obd",
                    "fields": {
                        "mph": speed,
                        "rpm": rpm,
                        "engine_load":  engine_load,
                        "coolant_temp": coolant_temp,
                        "intake_pressure": intake_pressure,
                        "intake_temp":  intake_temp,
                        "maf": maf,
                        "distance_w_mil": distance_w_mil,
                        "fuel_rail_pressure_direct": fuel_rail_pressure_direct,
                        "commander_egr": commander_egr,
                        "fuel_level": fuel_level,
                        "barometric_pressure": barometric_pressure
                 }
           }
         ]
    
        print(json_body) #for debug
        client = InfluxDBClient(host='localhost', port=8086, database='toucan')
        client.write_points(json_body)
        time.sleep(2)