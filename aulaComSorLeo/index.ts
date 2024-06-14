import { Cachorro } from "./Cachorro";
import { Coruja } from "./Coruja";

const novaCoruja:Coruja = new Coruja('Bianca',20)
const novaCachorro:Cachorro = new Cachorro('Xuxu',20,'chiuaua')

novaCachorro.Latir()
novaCachorro.Comer(20)
novaCoruja.chirriar()
novaCoruja.comer(20)
novaCoruja.voar(30)