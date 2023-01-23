const { sequelize , Quiz , Question ,Tag ,Answer ,User , Level } = require('./models')

async function main (){
    const myquest = await Question.findByPk(2, {
         include : [ "level" , "answers" ]
    })
    
    console.log("Niveau de la question : " + myquest.level.name)

    console.log("La question est  : " + myquest.description); 

    console.log("Reponses possibles : ");

    for(const reponse of myquest.answers)
    {
        console.log("=> " + reponse.description)
    }

   


    
}
main()