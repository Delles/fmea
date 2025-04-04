import { TreeNode, FaultTreeNode } from "./types";

export const initialTree: TreeNode = {
    id: "aircraft_system",
    name: "Aircraft System",
    type: "system",
    children: [
        {
            id: "propulsion_subsystem",
            name: "Propulsion Subsystem",
            type: "subsystem",
            children: [
                {
                    id: "engine",
                    name: "Engine",
                    type: "component",
                    children: [
                        {
                            id: "generate_thrust",
                            name: "Generate Thrust",
                            type: "function",
                            children: [
                                {
                                    id: "fuel_starvation",
                                    name: "Fuel Starvation",
                                    type: "fault",
                                    effect: "Loss of engine power",
                                    cause: "Fuel supply interruption",
                                    severity: 9,
                                    occurrence: 4,
                                    detection: 3,
                                    controls: {
                                        preventive:
                                            "Regular fuel system inspections\nFuel filter maintenance",
                                        detection:
                                            "Fuel pressure monitoring\nEmergency fuel pump system",
                                    },
                                } as FaultTreeNode,
                                {
                                    id: "compressor_failure",
                                    name: "Compressor Failure",
                                    type: "fault",
                                    effect: "Reduced engine performance",
                                    cause: "Foreign object damage",
                                    severity: 6,
                                    occurrence: 3,
                                    detection: 5,
                                    controls: {
                                        preventive:
                                            "Regular inspections\nFOD prevention training",
                                        detection:
                                            "Compressor health monitoring\nVibration analysis",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                        {
                            id: "control_engine_speed",
                            name: "Control Engine Speed",
                            type: "function",
                            children: [
                                {
                                    id: "throttle_malfunction",
                                    name: "Throttle Malfunction",
                                    type: "fault",
                                    effect: "Uncontrolled engine speed",
                                    cause: "Faulty throttle sensor",
                                    severity: 7,
                                    occurrence: 3,
                                    detection: 2,
                                    controls: {
                                        preventive:
                                            "Redundant sensors\nRegular calibration",
                                        detection:
                                            "Fail-safe mechanisms\nPilot override capability",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                    ],
                },
                {
                    id: "fuel_system",
                    name: "Fuel System",
                    type: "component",
                    children: [
                        {
                            id: "store_fuel",
                            name: "Store Fuel",
                            type: "function",
                            children: [
                                {
                                    id: "fuel_tank_leak",
                                    name: "Fuel Tank Leak",
                                    type: "fault",
                                    effect: "Fuel loss during flight",
                                    cause: "Structural damage",
                                    severity: 8,
                                    occurrence: 2,
                                    detection: 5,
                                    controls: {
                                        preventive: "Regular tank inspections",
                                        detection: "",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                        {
                            id: "refuel_aircraft",
                            name: "Refuel Aircraft",
                            type: "function",
                            children: [
                                {
                                    id: "fuel_spill",
                                    name: "Fuel Spill",
                                    type: "fault",
                                    effect: "Environmental hazard",
                                    cause: "Improper refueling procedures",
                                    severity: 6,
                                    occurrence: 4,
                                    detection: 3,
                                    controls: {
                                        preventive: "Training and monitoring",
                                        detection: "",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "electrical_subsystem",
            name: "Electrical Subsystem",
            type: "subsystem",
            children: [
                {
                    id: "battery",
                    name: "Battery",
                    type: "component",
                    children: [
                        {
                            id: "provide_electrical_power",
                            name: "Provide Electrical Power",
                            type: "function",
                            children: [
                                {
                                    id: "battery_depletion",
                                    name: "Battery Depletion",
                                    type: "fault",
                                    effect: "Loss of electrical power",
                                    cause: "Excessive power draw",
                                    severity: 6,
                                    occurrence: 5,
                                    detection: 2,
                                    controls: {
                                        preventive:
                                            "Battery charge monitoring\nLoad shedding procedures",
                                        detection:
                                            "Redundant power sources\nRegular battery health checks",
                                    },
                                } as FaultTreeNode,
                                {
                                    id: "short_circuit",
                                    name: "Short Circuit",
                                    type: "fault",
                                    effect: "Electrical system failure",
                                    cause: "Insulation breakdown",
                                    severity: 9,
                                    occurrence: 3,
                                    detection: 4,
                                    controls: {
                                        preventive:
                                            "Circuit breakers\nRegular wiring inspections",
                                        detection:
                                            "Insulation resistance testing\nFault current limiters",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                    ],
                },
                {
                    id: "generator",
                    name: "Generator",
                    type: "component",
                    children: [
                        {
                            id: "generate_electricity",
                            name: "Generate Electricity",
                            type: "function",
                            children: [
                                {
                                    id: "generator_overheating",
                                    name: "Overheating",
                                    type: "fault",
                                    effect: "Generator shutdown",
                                    cause: "Cooling system failure",
                                    severity: 10,
                                    occurrence: 8,
                                    detection: 7,
                                    controls: {
                                        preventive: "",
                                        detection: "Temperature sensors",
                                    },
                                } as FaultTreeNode,
                                {
                                    id: "voltage_fluctuation",
                                    name: "Voltage Fluctuation",
                                    type: "fault",
                                    effect: "Inconsistent power supply",
                                    cause: "Load changes",
                                    severity: 6,
                                    occurrence: 4,
                                    detection: 5,
                                    controls: {
                                        preventive: "Voltage regulators",
                                        detection: "",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: "avionics_subsystem",
            name: "Avionics Subsystem",
            type: "subsystem",
            children: [
                {
                    id: "navigation_system",
                    name: "Navigation System",
                    type: "component",
                    children: [
                        {
                            id: "provide_navigation_data",
                            name: "Provide Navigation Data",
                            type: "function",
                            children: [
                                {
                                    id: "gps_failure",
                                    name: "GPS Failure",
                                    type: "fault",
                                    effect: "Loss of accurate position data",
                                    cause: "Satellite signal interference",
                                    severity: 7,
                                    occurrence: 4,
                                    detection: 3,
                                    controls: {
                                        preventive: "",
                                        detection:
                                            "Redundant navigation systems",
                                    },
                                } as FaultTreeNode,
                                {
                                    id: "navigation_software_error",
                                    name: "Navigation Software Error",
                                    type: "fault",
                                    effect: "Incorrect navigation data",
                                    cause: "Software bug",
                                    severity: 6,
                                    occurrence: 3,
                                    detection: 5,
                                    controls: {
                                        preventive: "Regular software updates",
                                        detection: "",
                                    },
                                } as FaultTreeNode,
                            ],
                        },
                    ],
                },
                {
                    id: "system_health_monitoring",
                    name: "System Health Monitoring",
                    type: "function",
                    children: [
                        {
                            id: "sensor_failure",
                            name: "Sensor Failure",
                            type: "fault",
                            effect: "Inaccurate health data",
                            cause: "Sensor malfunction",
                            severity: 6,
                            occurrence: 4,
                            detection: 3,
                            controls: {
                                preventive: "Regular sensor calibration",
                                detection: "",
                            },
                        } as FaultTreeNode,
                        {
                            id: "data_processing_error",
                            name: "Data Processing Error",
                            type: "fault",
                            effect: "Delayed health status updates",
                            cause: "Software glitch",
                            severity: 5,
                            occurrence: 3,
                            detection: 2,
                            controls: {
                                preventive: "",
                                detection: "Error handling protocols",
                            },
                        } as FaultTreeNode,
                    ],
                },
            ],
        },
        {
            id: "fuel_efficiency_monitoring",
            name: "Fuel Efficiency Monitoring",
            type: "function",
            children: [
                {
                    id: "fuel_leak_detection",
                    name: "Fuel Leak Detection",
                    type: "fault",
                    effect: "Loss of fuel efficiency",
                    cause: "Leak in fuel lines",
                    severity: 7,
                    occurrence: 4,
                    detection: 3,
                    controls: {
                        preventive: "Regular inspections",
                        detection: "Monitoring systems",
                    },
                } as FaultTreeNode,
                {
                    id: "engine_tuning_issue",
                    name: "Engine Tuning Issue",
                    type: "fault",
                    effect: "Suboptimal fuel consumption",
                    cause: "Improper engine calibration",
                    severity: 6,
                    occurrence: 3,
                    detection: 2,
                    controls: {
                        preventive: "Routine engine tuning",
                        detection: "Diagnostics",
                    },
                } as FaultTreeNode,
            ],
        },
    ],
};
