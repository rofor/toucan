[
    {
        "id": "9bc55e15.bde44",
        "type": "tab",
        "label": "OBD",
        "disabled": false,
        "info": ""
    },
    {
        "id": "104accf3.d3e6c3",
        "type": "mqtt in",
        "z": "9bc55e15.bde44",
        "name": "",
        "topic": "sensors/obd",
        "qos": "0",
        "datatype": "auto",
        "broker": "9ae908ac.0df9f8",
        "x": 170,
        "y": 140,
        "wires": [
            [
                "5c91ec17.29ac24"
            ]
        ]
    },
    {
        "id": "a45fcdc3.37fdb",
        "type": "influxdb batch",
        "z": "9bc55e15.bde44",
        "influxdb": "e0bea83f.a8d948",
        "precision": "",
        "retentionPolicy": "",
        "name": "",
        "x": 500,
        "y": 100,
        "wires": []
    },
    {
        "id": "5c91ec17.29ac24",
        "type": "json",
        "z": "9bc55e15.bde44",
        "name": "",
        "property": "payload",
        "action": "",
        "pretty": false,
        "x": 310,
        "y": 140,
        "wires": [
            [
                "a45fcdc3.37fdb",
                "d492bc74.14f39",
                "d15f96af.c22ae8"
            ]
        ]
    },
    {
        "id": "d492bc74.14f39",
        "type": "function",
        "z": "9bc55e15.bde44",
        "name": "Extract maf value",
        "func": "msg.payload = {\"maf\": msg.payload[0].fields.maf}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 140,
        "wires": [
            []
        ]
    },
    {
        "id": "d15f96af.c22ae8",
        "type": "function",
        "z": "9bc55e15.bde44",
        "name": "Extract speed value",
        "func": "msg.payload = {\"speed\": msg.payload[0].fields.speed}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 490,
        "y": 180,
        "wires": [
            [
                "79c01664.52f198"
            ]
        ]
    },
    {
        "id": "efddc686.98e818",
        "type": "mqtt in",
        "z": "9bc55e15.bde44",
        "name": "",
        "topic": "sensors/ignition",
        "qos": "0",
        "datatype": "auto",
        "broker": "9ae908ac.0df9f8",
        "x": 220,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "15001fa9.03fb5",
        "type": "trigger",
        "z": "9bc55e15.bde44",
        "op1": "1",
        "op2": "0",
        "op1type": "str",
        "op2type": "str",
        "duration": "250",
        "extend": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "name": "",
        "x": 420,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "7d0dd133.0f6ba",
        "type": "exec",
        "z": "9bc55e15.bde44",
        "command": "python /home/pi/toucan/readOBD.py",
        "addpay": true,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "",
        "x": 520,
        "y": 360,
        "wires": [
            [],
            [],
            []
        ]
    },
    {
        "id": "79c01664.52f198",
        "type": "debug",
        "z": "9bc55e15.bde44",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 690,
        "y": 160,
        "wires": []
    },
    {
        "id": "9ae908ac.0df9f8",
        "type": "mqtt-broker",
        "z": "",
        "name": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "closeTopic": "",
        "closePayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "e0bea83f.a8d948",
        "type": "influxdb",
        "z": "",
        "hostname": "localhost",
        "port": "8086",
        "protocol": "http",
        "database": "toucan",
        "name": "",
        "usetls": false,
        "tls": ""
    }
]
