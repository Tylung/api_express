import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {

    res.send('Hola get')
})

router.post('/', (req, res) => {

    res.send('Hola post')
})

router.put('/', (req, res) => {

    res.send('Hola put')
})

router.delete('/', (req, res) => {

    res.send('Hola delete')
})


export default router;