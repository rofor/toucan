[
    {
        "id": "e8751a73.f82678",
        "type": "tab",
        "label": "PIR",
        "disabled": false,
        "info": ""
    },
    {
        "id": "50deaac1.4fd7d4",
        "type": "tab",
        "label": "C02",
        "disabled": false,
        "info": ""
    },
    {
        "id": "91e01e12.c56cd",
        "type": "tab",
        "label": "OBD",
        "disabled": false,
        "info": ""
    },
    {
        "id": "617c82d2.9e9cdc",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": ""
    },
    {
        "id": "280dddf5.bd2fc2",
        "type": "ui_base",
        "theme": {
            "name": "theme-light",
            "lightTheme": {
                "default": "#0094CE",
                "baseColor": "#0094CE",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": true,
                "reset": false
            },
            "darkTheme": {
                "default": "#097479",
                "baseColor": "#097479",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",
                "edited": false
            },
            "customTheme": {
                "name": "Untitled Theme 1",
                "default": "#4B7930",
                "baseColor": "#4B7930",
                "baseFont": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
            },
            "themeState": {
                "base-color": {
                    "default": "#0094CE",
                    "value": "#0094CE",
                    "edited": false
                },
                "page-titlebar-backgroundColor": {
                    "value": "#0094CE",
                    "edited": false
                },
                "page-backgroundColor": {
                    "value": "#fafafa",
                    "edited": false
                },
                "page-sidebar-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-textColor": {
                    "value": "#1bbfff",
                    "edited": false
                },
                "group-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "group-backgroundColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "widget-textColor": {
                    "value": "#111111",
                    "edited": false
                },
                "widget-backgroundColor": {
                    "value": "#0094ce",
                    "edited": false
                },
                "widget-borderColor": {
                    "value": "#ffffff",
                    "edited": false
                },
                "base-font": {
                    "value": "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif"
                }
            },
            "angularTheme": {
                "primary": "indigo",
                "accents": "blue",
                "warn": "red",
                "background": "grey"
            }
        },
        "site": {
            "name": "Node-RED Dashboard",
            "hideToolbar": "false",
            "allowSwipe": "false",
            "lockMenu": "false",
            "allowTempTheme": "true",
            "dateFormat": "DD/MM/YYYY",
            "sizes": {
                "sx": 48,
                "sy": 48,
                "gx": 6,
                "gy": 6,
                "cx": 6,
                "cy": 6,
                "px": 0,
                "py": 0
            }
        }
    },
    {
        "id": "6ae5bdd1.029544",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "newline": "",
        "bin": "bin",
        "out": "char",
        "addchar": "false",
        "responsetimeout": ""
    },
    {
        "id": "6cb224be.92813c",
        "type": "serial-port",
        "z": "",
        "serialport": "",
        "serialbaud": "57600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "dtr": "none",
        "rts": "none",
        "cts": "none",
        "dsr": "none",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": "",
        "responsetimeout": "10000"
    },
    {
        "id": "79bff008.46758",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "waitfor": "",
        "newline": "",
        "bin": "bin",
        "out": "char",
        "addchar": "",
        "responsetimeout": ""
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
    },
    {
        "id": "cd192c31.52ec6",
        "type": "influxdb",
        "z": "50deaac1.4fd7d4",
        "hostname": "127.0.0.1",
        "port": "8086",
        "database": "aTimeSeries",
        "name": "aTimeSeries",
        "usetls": false
    },
    {
        "id": "b2b0880.a429678",
        "type": "influxdb",
        "z": "50deaac1.4fd7d4",
        "hostname": "127.0.0.1",
        "port": "8086",
        "database": "aTimeSeries",
        "name": "aTimeSeries"
    },
    {
        "id": "958c227a.6ed6f",
        "type": "influxdb",
        "z": "50deaac1.4fd7d4",
        "hostname": "localhost",
        "port": "8086",
        "database": "toucan",
        "name": "toucan",
        "usetls": false,
        "tls": ""
    },
    {
        "id": "880c63a3.0e97e",
        "type": "influxdb",
        "z": "50deaac1.4fd7d4",
        "hostname": "127.0.0.1",
        "port": "8086",
        "database": "aTimeSeries",
        "name": "aTimeSeries"
    },
    {
        "id": "2e0901d0.9c86ce",
        "type": "influxdb",
        "z": "50deaac1.4fd7d4",
        "hostname": "127.0.0.1",
        "port": "8086",
        "database": "aTimeSeries",
        "name": "aTimeSeries"
    },
    {
        "id": "b580d756.66d708",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/tty.SLAB_USBtoUART",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "",
        "bin": "bin",
        "out": "char",
        "addchar": false
    },
    {
        "id": "4992f742.8577c8",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/tty.SLAB_USBtoUART",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "",
        "bin": "bin",
        "out": "char",
        "addchar": false
    },
    {
        "id": "2dea639d.d4266c",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/tty.SLAB_USBtoUART",
        "serialbaud": "9600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "",
        "bin": "bin",
        "out": "char",
        "addchar": false
    },
    {
        "id": "cd25487f.8ecfb8",
        "type": "influxdb",
        "z": "91e01e12.c56cd",
        "hostname": "127.0.0.1",
        "port": "8086",
        "database": "toucan",
        "name": "toucan",
        "usetls": false,
        "tls": ""
    },
    {
        "id": "aba05ddf.126c4",
        "type": "mqtt-broker",
        "z": "",
        "broker": "localhost",
        "port": "1883",
        "clientid": "Pi2_NR-Live",
        "usetls": false,
        "verifyservercert": true,
        "compatmode": false,
        "keepalive": "15",
        "cleansession": true,
        "birthTopic": "DEVICES/PI2NR-LIVE",
        "birthQos": "1",
        "birthRetain": "false",
        "birthPayload": "Online",
        "willTopic": "DEVICES/PI2NR-LIVE",
        "willQos": "1",
        "willRetain": "false",
        "willPayload": "Offline"
    },
    {
        "id": "a99c3578.f56cf8",
        "type": "ui_group",
        "z": "",
        "name": "Motor",
        "tab": "2eef982.242c568",
        "order": 1,
        "disp": true,
        "width": "9"
    },
    {
        "id": "129f2619.147faa",
        "type": "ui_group",
        "z": "",
        "name": "Van",
        "tab": "2eef982.242c568",
        "order": 2,
        "disp": true,
        "width": "6"
    },
    {
        "id": "e4f3d8bf.fc38d8",
        "type": "ui_group",
        "z": "",
        "name": "Phone",
        "tab": "2eef982.242c568",
        "order": 3,
        "disp": true,
        "width": "6"
    },
    {
        "id": "268ecda2.9e0142",
        "type": "mqtt-broker",
        "z": "",
        "broker": "mqtt.YOUR.SERVER",
        "port": "1883",
        "clientid": "nodered",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "willTopic": "",
        "willQos": "0",
        "willPayload": ""
    },
    {
        "id": "2eef982.242c568",
        "type": "ui_tab",
        "z": "",
        "name": "Torque",
        "icon": "fa-car",
        "order": 2
    },
    {
        "id": "66a6c3d8.b8a9ec",
        "type": "MySQLdatabase",
        "z": "617c82d2.9e9cdc",
        "host": "drobo5n.YOUR.SERVER",
        "port": "3306",
        "db": "openhab",
        "tz": "CST"
    },
    {
        "id": "95141c35.8e15d",
        "type": "rpi-gpio in",
        "z": "e8751a73.f82678",
        "name": "",
        "pin": "16",
        "intype": "tri",
        "debounce": "25",
        "read": false,
        "x": 190,
        "y": 180,
        "wires": [
            [
                "62484619.8e9728"
            ]
        ]
    },
    {
        "id": "d61eabff.29ac78",
        "type": "serial in",
        "z": "50deaac1.4fd7d4",
        "name": "USB UART RX",
        "serial": "79bff008.46758",
        "x": 100,
        "y": 40,
        "wires": [
            [
                "fd91b61a.0199e8"
            ]
        ]
    },
    {
        "id": "d156146.5bc54e8",
        "type": "serial out",
        "z": "50deaac1.4fd7d4",
        "name": "USB UART TX",
        "serial": "79bff008.46758",
        "x": 520,
        "y": 100,
        "wires": []
    },
    {
        "id": "96e78c9c.416fb",
        "type": "inject",
        "z": "50deaac1.4fd7d4",
        "name": "5 Sec",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 100,
        "y": 100,
        "wires": [
            [
                "6789d7f9.8f6618"
            ]
        ]
    },
    {
        "id": "6789d7f9.8f6618",
        "type": "function",
        "z": "50deaac1.4fd7d4",
        "name": "Request CO2 concentration",
        "func": "msg.payload = new Buffer([0xff,0x01,0x86,0x00,0x00,0x00,0x00,0x00,0x79]);  \nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 300,
        "y": 100,
        "wires": [
            [
                "d156146.5bc54e8"
            ]
        ]
    },
    {
        "id": "fd91b61a.0199e8",
        "type": "function",
        "z": "50deaac1.4fd7d4",
        "name": "Read CO2 concentration",
        "func": "msg.str = msg.payload.toString('hex');\nmsg.int = parseInt(msg.str, 16);\nif (msg.str == 'ff')\n    {\n        context.set('co2buffer',msg.payload);\n        context.set('count',1);\n        context.set('checksumm',msg.int);\n    }\n    else\n    {\n        var co2buffer = Buffer.concat([context.get('co2buffer'),msg.payload]);\n        context.set('co2buffer',co2buffer);\n        var count = context.get('count');\n        var checksumm = context.get('checksumm');\n        count += 1;\n        context.set('count',count);\n        if (count == 3)\n            context.set('co2',msg.int*256);\n        if (count == 4)\n            context.set('co2',context.get('co2')+msg.int);\n        if (count != 9)\n        {\n            checksumm += msg.int;\n            context.set('checksumm',checksumm);\n        }\n    }\nif (count == 9 && msg.int == (255 - (checksumm % 256))  ){\n    msg.payload = context.get('co2');\n    return msg;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 310,
        "y": 40,
        "wires": [
            [
                "d08663ce.3fe56",
                "1e1b8fa.d66827"
            ]
        ]
    },
    {
        "id": "d08663ce.3fe56",
        "type": "debug",
        "z": "50deaac1.4fd7d4",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 510,
        "y": 40,
        "wires": []
    },
    {
        "id": "1970c7e8.f82f88",
        "type": "debug",
        "z": "e8751a73.f82678",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 690,
        "y": 180,
        "wires": []
    },
    {
        "id": "3542e96b.f0c176",
        "type": "influxdb out",
        "z": "e8751a73.f82678",
        "influxdb": "e0bea83f.a8d948",
        "name": "",
        "measurement": "gpio",
        "precision": "",
        "retentionPolicy": "",
        "x": 720,
        "y": 260,
        "wires": []
    },
    {
        "id": "62484619.8e9728",
        "type": "template",
        "z": "e8751a73.f82678",
        "name": "Format JSON - pir",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{\"pir\": {{payload}}}\n\n",
        "output": "json",
        "x": 350,
        "y": 180,
        "wires": [
            [
                "1970c7e8.f82f88",
                "3542e96b.f0c176"
            ]
        ]
    },
    {
        "id": "1e1b8fa.d66827",
        "type": "template",
        "z": "50deaac1.4fd7d4",
        "name": "Format JSON - co2",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{\"co2\": {{payload}}}\n\n",
        "output": "json",
        "x": 410,
        "y": 260,
        "wires": [
            [
                "44e35240.bc5eac",
                "be52adf6.e279"
            ]
        ]
    },
    {
        "id": "44e35240.bc5eac",
        "type": "debug",
        "z": "50deaac1.4fd7d4",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "x": 750,
        "y": 260,
        "wires": []
    },
    {
        "id": "be52adf6.e279",
        "type": "influxdb out",
        "z": "50deaac1.4fd7d4",
        "influxdb": "e0bea83f.a8d948",
        "name": "",
        "measurement": "gpio",
        "precision": "",
        "retentionPolicy": "",
        "x": 780,
        "y": 340,
        "wires": []
    },
    {
        "id": "b1e272b5.0b594",
        "type": "pythonshell in",
        "z": "617c82d2.9e9cdc",
        "x": 440,
        "y": 220,
        "wires": [
            []
        ]
    }
]