import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObjects } from "../helpers/createMenuObjects";

export const search = (req: Request, res: Response) => {
    // exibição da querystring no URL da pesquisa
    let query: string = req.query.q as string;

    // condição se não estiver preenchido nada no input, irá redirecionar a home page
    if (!query) {
        res.redirect('/')
        return
    }

    let list = Pet.getFromName(query)

    res.render('pages/page', {
        menu: createMenuObjects(''),
        list,
        query
    })
}