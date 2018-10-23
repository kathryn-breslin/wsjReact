import axios from "axios";

export default {
    getArticles: function(query) {
        return axios.get("/api/articles", { params: { q: query } });
    },
    saveArticle: function() {
        return axios.post("/api/articles");
    },
    deleteArticle: function(id){
        return axios.delete("/api/articles/" + id);
    }
};