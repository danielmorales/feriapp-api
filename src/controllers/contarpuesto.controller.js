import Puesto from '../models/Puesto';

//Funcion de prueba
export async function getParaContar(_req,res){
    
    try {
        console.log("PRUEBA PARA CONTAR PUESTOS EN TOTAL");
        const puestos = await Puesto.count();
        res.json({
               puestos
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal, no se pudo obtener los puestos',
            data: {}
        });
    }
}