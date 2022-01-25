import { articles } from '../../../data.js'

export default function handler(req, res){
    const {id} = req.query
    const filteredArticle = articles.filter(article => article.id === id)
    if(filteredArticle.length > 0){
        res.status(200).json(filteredArticle[0])
    }else{
        res.status(404).json({message: `Article with id of ${id} is not found`})
    }
    
}