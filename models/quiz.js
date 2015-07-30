// Definicion del modelo de Quiz

module.exports = function(sequelize, DataTypes){
  return sequelize.define('Quiz',
            {
              pregunta: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "-> Falta Pregunta"} }
              },
              respuesta: {
                type: DataTypes.STRING,
                validate: { notEmpty: { msg: "-> Falta Respuesta"} }
<<<<<<< HEAD
              },
              tema:{ type: DataTypes.STRING,
       validate: { isIn: {
         args: [["Otro", "Humanidades", "Ocio", "Ciencia", "Tecnología"]],
         msg: "-> Categoría incorrecta"
         }
       }
     }
=======
              }
>>>>>>> 37ac1523894882ba704ab35fc6018feebe539dd3
            });
}
