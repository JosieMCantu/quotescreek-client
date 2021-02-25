import request from 'superagent';

const URL = 'https://fast-badlands-63614.herokuapp.com';

export async function getQuotes() {
    const response = await request.get(`${URL}/quotesCreek`);
    return response.body;
}

export async function getCategories() {
    const { body } = await request.get(`${URL}/categories`);
    return body;
}
export async function getQuote(id) {
    const { body } = await request.get(`${URL}/quotesCreek/${id}`);
    return body;
}

export async function makeQuote(aFewWords) {
    const { body } = await request
        .post(`${URL}/quotesCreek/`)
        .send(aFewWords);
    return body;
}

export async function deleteQuote() {
    const { body } = await request
        .delete(`${URL}/quotesCreek/`);
    return body;
}

export async function updateQuote(id, aFewWords) {
    const { body } = await request
        .put(`${URL}/quotesCreek/${id}`)
        .send(aFewWords);
    return body;
}