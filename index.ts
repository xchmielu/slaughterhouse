import { Strus } from './Strus'
import { Pies } from "./Pies";
import { Kot } from "./Kot";
import { Rzeznia } from "./Rzeznia";


    const strus = new Strus('Janek')
    const pies = new Pies('Ciapek')
    const kot = new Kot('Lolek')
    const rzeznia = Rzeznia.getInstance()

    rzeznia.uboj(pies)
    rzeznia.uboj(kot)
    rzeznia.uboj(strus)
