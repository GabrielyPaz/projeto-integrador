import { createContext, useState } from "react";

export const EyeButtonContext = createContext();


const EyeButtonContextProvider = (children) => {

	const [contextEyeButton, setContextEyeButton] = useState(false);

	return(
		<EyeButtonContext.Provider value={{contextEyeButton, setContextEyeButton}} >
			{ children }
		</EyeButtonContext.Provider>
	);

}

export default EyeButtonContextProvider;