/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 .\public\models\stage\model.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Stage(props) {
    const { nodes, materials } = useGLTF('./models/stage/model.gltf')
    return (
        <group {...props} dispose={null}>
            <group position={[0, 3.348, -11.608]} rotation={[Math.PI, -0.822, Math.PI]} scale={15.555}>
                <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat23} />
                <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat14} />
            </group>
            <group position={[-5.029, 1.773, -11.444]} rotation={[Math.PI, -1.188, Math.PI]} scale={7.96}>
                <mesh geometry={nodes['Node-Mesh001'].geometry} material={materials.mat23} />
                <mesh geometry={nodes['Node-Mesh001_1'].geometry} material={materials.mat14} />
            </group>
            <group position={[5.029, 1.773, -11.444]} rotation={[Math.PI, -0.452, Math.PI]} scale={7.96}>
                <mesh geometry={nodes['Node-Mesh003'].geometry} material={materials.mat23} />
                <mesh geometry={nodes['Node-Mesh003_1'].geometry} material={materials.mat14} />
            </group>
            <mesh geometry={nodes.body.geometry} material={materials.body} position={[-10.213, 0, -7.059]} rotation={[0, 0.619, 0]} scale={0.401}>
                <mesh geometry={nodes.belt_01.geometry} material={materials['Material.001']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.belt_02.geometry} material={materials['Material.006']} position={[0, 2.323, 0]} />
                <group position={[0, 2.323, 0]}>
                    <mesh geometry={nodes.Cube009.geometry} material={materials['Material.024']} />
                    <mesh geometry={nodes.Cube009_1.geometry} material={materials['Material.023']} />
                </group>
                <mesh geometry={nodes.cap.geometry} material={materials['Material.025']} position={[0, 2.323, 0]} />
                <group position={[0, 2.323, 0]}>
                    <mesh geometry={nodes.Cube013.geometry} material={materials['Material.026']} />
                    <mesh geometry={nodes.Cube013_1.geometry} material={materials['Material.027']} />
                </group>
                <mesh geometry={nodes.elements.geometry} material={materials['Material.027']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.eyes.geometry} material={materials['Material.029']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.hand_l.geometry} material={materials.body} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.hand_r.geometry} material={materials.body} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.trousers003.geometry} material={materials['Material.030']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.Cube014.geometry} material={materials['Material.022']} />
                <mesh geometry={nodes.Cube014_1.geometry} material={materials['Material.023']} />
            </mesh>
            <mesh geometry={nodes.body001.geometry} material={materials.body} position={[8.151, 0, -3.291]} rotation={[0, -1.014, 0]} scale={0.401}>
                <mesh geometry={nodes.belt_01001.geometry} material={materials['Material.001']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.belt_02001.geometry} material={materials['Material.027']} position={[0, 2.323, 0]} />
                <group position={[0, 2.323, 0]}>
                    <mesh geometry={nodes.Cube020.geometry} material={materials['Material.027']} />
                    <mesh geometry={nodes.Cube020_1.geometry} material={materials['Material.023']} />
                </group>
                <mesh geometry={nodes.cap001.geometry} material={materials['Material.021']} position={[0, 2.323, 0]} />
                <group position={[0, 2.323, 0]}>
                    <mesh geometry={nodes.Cube022.geometry} material={materials['Material.026']} />
                    <mesh geometry={nodes.Cube022_1.geometry} material={materials['Material.027']} />
                </group>
                <mesh geometry={nodes.elements001.geometry} material={materials['Material.027']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.eyes001.geometry} material={materials['Material.029']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.hand_l001.geometry} material={materials.body} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.hand_r001.geometry} material={materials.body} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.trousers001.geometry} material={materials['Material.007']} position={[0, 2.323, 0]} />
                <mesh geometry={nodes.Cube019.geometry} material={materials['Material.036']} />
                <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.001']} />
            </mesh>
            <group position={[7.867, 1.322, -5.594]} rotation={[0.004, -0.518, -0.019]} scale={[1.794, 1.03, 0.841]}>
                <mesh geometry={nodes.Cube002.geometry} material={materials['Material.002']} />
                <mesh geometry={nodes.Cube002_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube002_2.geometry} material={materials['Material.017']} />
                <mesh geometry={nodes.door.geometry} material={materials['Material.005']} position={[-0.097, -0.16, 0.828]} scale={[0.227, 0.675, 0.102]} />
                <mesh geometry={nodes.door_handle.geometry} material={materials['Material.008']} position={[0.062, -0.316, 0.991]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.068, 0.084, 0.039]} />
                <mesh geometry={nodes.flower_01.geometry} material={materials['Material.010']} position={[0.455, 0.02, 0.913]} rotation={[1.915, -1.496, 0.3]} scale={[0.242, 0.27, 0.14]} />
                <mesh geometry={nodes.flower_02.geometry} material={materials['Material.007']} position={[0.467, 0.01, 1.017]} scale={[0.046, 0.081, 0.083]} />
                <mesh geometry={nodes.flower_03.geometry} material={materials['Material.011']} position={[0.536, 0.015, 0.993]} rotation={[0, 0, -Math.PI / 2]} scale={[0.029, 0.036, 0.065]} />
                <mesh geometry={nodes.headlights_01.geometry} material={materials['Material.016']} position={[1.111, -0.803, -0.841]} rotation={[0.07, -0.149, -1.019]} scale={[0.072, 0.055, 0.095]} />
                <mesh geometry={nodes.headlights_02.geometry} material={materials['Material.016']} position={[1.111, -0.803, 0.794]} rotation={[0.07, -0.149, -1.019]} scale={[0.072, 0.055, 0.095]} />
                <mesh geometry={nodes.window_01.geometry} material={materials['Material.007']} position={[-0.084, 0.128, 0.931]} scale={[0.153, 0.267, 0.049]} />
                <group position={[-0.638, -0.015, 0.935]} scale={[0.211, 0.253, 0.164]}>
                    <mesh geometry={nodes.Cube007.geometry} material={materials['Material.004']} />
                    <mesh geometry={nodes.Cube007_1.geometry} material={materials['Material.003']} />
                </group>
            </group>
            <mesh geometry={nodes.wheels_detals.geometry} material={nodes.wheels_detals.material} position={[7.861, 0.41, -5.581]}>
                <group position={[0.575, -0.025, 1.082]} rotation={[-3.098, -1.052, 1.604]} scale={0.391}>
                    <mesh geometry={nodes.Circle001.geometry} material={materials['Material.009']} />
                    <mesh geometry={nodes.Circle001_1.geometry} material={materials['Material.005']} />
                </group>
            </mesh>
            <mesh geometry={nodes.tent.geometry} material={materials['Material.012']} position={[-8.57, 0.83, -8.86]} rotation={[0, 0.533, 0]} scale={[1.241, 0.802, 0.802]}>
                <mesh geometry={nodes.a_blanket.geometry} material={materials['Material.015']} position={[0.278, 0.085, 0.518]} rotation={[0, -0.771, 0]} scale={[0.4, 0.476, 0.402]} />
                <mesh geometry={nodes.pillow_01.geometry} material={materials['Material.013']} position={[-0.193, -0.162, -0.465]} rotation={[0.805, 0.059, -0.043]} scale={[0.302, 0.126, 0.467]} />
                <mesh geometry={nodes.pillow_02.geometry} material={materials['Material.014']} position={[0.285, -0.19, -0.199]} rotation={[0.849, 0.251, -0.391]} scale={[0.263, 0.094, 0.361]} />
                <mesh geometry={nodes.pillow_03.geometry} material={materials['Material.014']} position={[-0.365, -0.659, 0.009]} rotation={[0, -0.195, 0]} scale={[0.331, 0.131, 0.817]} />
                <mesh geometry={nodes.pillow_04.geometry} material={materials['Material.013']} position={[0.325, -0.654, 0.206]} rotation={[0, 0.026, 0]} scale={[0.324, 0.131, 0.825]} />
            </mesh>
            <mesh geometry={nodes.cactus_01.geometry} material={materials['Material.018']} position={[-8.104, 1.224, -1.5]} rotation={[0, 0.492, 0]} scale={[0.265, 1.408, 0.265]} />
            <mesh geometry={nodes.cactus_02.geometry} material={materials['Material.019']} position={[-3.298, 0.848, -8.586]} rotation={[0, 0.059, 0]} scale={[0.162, 0.858, 0.162]} />
            <mesh geometry={nodes.hill_01.geometry} material={materials['Material.036']} position={[0.117, 1.595, -18.891]} rotation={[0, -0.139, 0]} scale={[2.394, 1.763, 1.417]}>
                <mesh geometry={nodes.bush_03.geometry} material={materials['Material.012']} position={[-0.336, 0.771, -0.125]} rotation={[0, -0.281, 0]} scale={[-0.008, -0.071, -0.013]} />
            </mesh>
            <mesh geometry={nodes.hill_02.geometry} material={materials['Material.035']} position={[3.522, 2.315, -17.418]} rotation={[0, 0.367, 0]} scale={[3.057, 2.498, 1.81]} />
            <mesh geometry={nodes.stone_01.geometry} material={materials['Material.020']} position={[6.124, 0.109, 5.673]} rotation={[0.074, 0.561, -0.299]} scale={[0.19, 0.126, 0.147]}>
                <mesh geometry={nodes.stone_02.geometry} material={materials['Material.020']} position={[-2.24, -1.094, -0.308]} rotation={[0.763, -0.785, 0.815]} scale={[1.268, 0.919, 0.922]} />
            </mesh>
            <mesh geometry={nodes.stone_04.geometry} material={materials['Material.020']} position={[-5.5, 0.137, 5.936]} rotation={[0.018, 0.668, 0.812]} scale={[0.179, 0.118, 0.138]}>
                <mesh geometry={nodes.stone_03.geometry} material={materials['Material.020']} position={[0.503, -0.978, 2.16]} rotation={[-0.032, -0.093, -1.051]} scale={[1.178, 0.628, 0.833]} />
            </mesh>
            <mesh geometry={nodes.stone_05.geometry} material={materials['Material.020']} position={[1.898, 0.343, 7.046]} rotation={[0.624, -0.677, 1.824]} scale={[0.458, 0.304, 0.353]} />
            <mesh geometry={nodes.stone_06.geometry} material={materials['Material.020']} position={[-3.847, 0.049, 5.315]} rotation={[0.676, 0.616, -0.679]} scale={[0.19, 0.126, 0.147]} />
            <mesh geometry={nodes.bush_01.geometry} material={materials['Material.013']} position={[3.21, 0.131, -4.35]} rotation={[0.001, -0.289, -0.895]} scale={0.121} />
            <mesh geometry={nodes.bush_02.geometry} material={materials['Material.013']} position={[5.1, 0.108, 3.246]} rotation={[0.116, -0.017, 1.124]} scale={0.482} />
            <mesh geometry={nodes.bush_04.geometry} material={materials['Material.028']} position={[-4.534, 0.319, 5.165]} rotation={[0, 0.218, 0]} scale={0.969}>
                <mesh geometry={nodes.leaves.geometry} material={materials['Material.014']} position={[0.004, 0.43, 0.005]} scale={[0.233, 0.233, 0.023]} />
            </mesh>
            <mesh geometry={nodes.cloud.geometry} material={nodes.cloud.material} position={[-5.105, 1.262, -23.575]} scale={1.815} />
            <mesh geometry={nodes.footing_02.geometry} material={materials['Material.037']} position={[0.068, 0.165, -0.085]} scale={4.923}>
                <mesh geometry={nodes.footing.geometry} material={materials['Material.036']} position={[-0.014, -0.066, 0.017]} scale={1.028} />
            </mesh>
            <mesh geometry={nodes.table_02.geometry} material={materials['Material.021']} position={[-8.022, 0.292, -6.296]} rotation={[0, -1.347, 0]} scale={[0.417, 0.238, 0.164]} />
            <mesh geometry={nodes.hill_02001.geometry} material={materials['Material.035']} position={[-3.056, 1.868, -20.311]} rotation={[Math.PI, -0.526, Math.PI]} scale={[2.265, 1.851, 1.341]} />
            <mesh geometry={nodes.cloud001.geometry} material={nodes.cloud001.material} position={[1.403, 2.101, -24.368]} rotation={[0, 0.222, 0]} scale={1.4} />
            <mesh geometry={nodes.cloud002.geometry} material={nodes.cloud002.material} position={[9.071, 1.583, -24.139]} rotation={[0, 0.222, 0]} scale={2.408} />
            <mesh geometry={nodes.table_01.geometry} material={materials['Material.021']} position={[-7.539, 0.19, -6.853]} rotation={[0.856, 1.072, 2.439]} scale={[0.057, 0.201, 0.057]}>
                <mesh geometry={nodes['01'].geometry} material={materials['Material.033']} position={[9.913, -2.863, 9.792]} rotation={[1.339, 1.091, 2.168]} scale={[1.779, 0.846, 1.818]} />
                <mesh geometry={nodes['02'].geometry} material={materials['Material.031']} position={[-2.085, -2.068, 4.355]} rotation={[1.339, 1.091, 2.168]} scale={[1.382, 0.475, 1.413]} />
                <mesh geometry={nodes['03'].geometry} material={materials['Material.032']} position={[13.629, -3.756, 12.758]} rotation={[1.339, 1.091, 2.168]} scale={[0.86, 0.704, 0.879]} />
                <mesh geometry={nodes['04'].geometry} material={nodes['04'].material} position={[13.744, -4.3, 11.342]} rotation={[1.313, 1.073, 2.363]} scale={[0.086, 0.78, 0.094]} />
                <mesh geometry={nodes['05'].geometry} material={materials['Material.034']} position={[3.568, -3.207, 9.916]} rotation={[-0.653, 0.158, 0.843]} scale={[7.529, 9.269, 4.768]} />
                <mesh geometry={nodes['06'].geometry} material={materials['Material.034']} position={[0.672, -2.165, 1.975]} rotation={[-1.219, -0.441, -0.545]} scale={[9.053, 9.138, 3.078]} />
            </mesh>
        </group>
    )
}

useGLTF.preload('/models/stage/models.gltf')
