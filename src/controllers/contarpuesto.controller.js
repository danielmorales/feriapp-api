import Puesto from '../models/Puesto';

//Funcion de prueba
export async function getParaContar(_req,res){
    
    try {
        console.log("PRUEBA");
        const puestos = await Puesto.findAll({
            attributes: [[sequelize.fn('COUNT', sequelize.col('id_puesto')), 3]]
          });
        console.log(puestos);
       /* res.json({
            puestos
        });*/
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo anda mal, no se pudo obtener los puestos',
            data: {}
        });
    }
}