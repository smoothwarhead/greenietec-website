import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import '../../styles/sphere.css';



const BgSphere = () => {
  return (
    <Canvas className="can">
			<perspectiveCamera position={[0, 0, 1000]} />
			<ambientLight intensity={5} />
			<OrbitControls autoRotate />
			<pointLight position={[50, 10, 10]} />
			<points>
				<sphereGeometry attach="geometry" args={[2.5, 50, 50]} />
				<pointsMaterial
					className="point"
					attach="material"
					color="#A8AAAD"
					opacity="0"
					size={0.025}
				/>
			</points>
		</Canvas>
  )
}

export default BgSphere;