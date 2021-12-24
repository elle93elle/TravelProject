let posts = [
    {
        id:1,
        title: 'Austria',
        description: 'Austria,officially the Republic of Austria,is a landlocked country in the southern part of Central Europe, located on the Eastern Alps. Austria is bordered by Germany to the northwest, the Czech Republic to the north, Slovakia to the northeast, Hungary to the east, Slovenia and Italy to the south, and Switzerland and Liechtenstein to the west.',
        duration: 5,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/201eebab60c016f83ab3d972cca5738c-full.jpg',
        price: 500,
    },
    {
        id:2,
        title: 'Bali',
        description: 'Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan.',
        duration: 10,
        price: 800,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/ba5c4f2a436b69809d1e1a78c21a37bd-full.jpg'

    },
    {
        id:3,
        title: 'Morocco',
        description: 'Morocco, officially the Kingdom of Morocco, is the northwestern most country in the Maghreb region of North Africa. It overlooks the Mediterranean Sea to the north and the Atlantic Ocean to the west, and has land borders with Algeria to the east, and the disputed territory of Western Sahara to the south.',
        duration: 7,
        price: 700,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/6ea7fdb18b59be94cd4098674e493440-full.jpg'
    },
    {
        id:4,
        title: 'Vietnam',
        description: 'Vietnam, officially the Socialist Republic of Vietnam, is a country in Southeast Asia. Located at the eastern edge of mainland Southeast Asia, it covers 311,699 square kilometres. With a population of over 96 million, it is the world\'s fifteenth - mostpopulous country.',
        duration: 8,
        price: 750,
        image:'https://cdn1.savepice.ru/uploads/2021/12/24/54ecb504dc87bec0101ac3c12fa67724-full.jpg'
    },
    {
        id:5,
        title: 'Norway',
        description: 'Norway, officially the Kingdom of Norway, is a Nordic country in Northern Europe, the mainland territory of which comprises the western and northernmost portion of the Scandinavian Peninsula. The remote Arctic island of Jan Mayen and the archipelago of Svalbard also form part of Norway.',
        duration: 5,
        price: 800,
        image:'https://cdn1.savepice.ru/uploads/2021/12/24/7bf1cf6d5e0eabdc0b5ed614ee00beb1-full.jpg'
    },
    {
        id:6,
        title: 'Iceland',
        description: 'Iceland is a Nordic island country in the North Atlantic Ocean and the most sparsely populated country in Europe. The capital and largest city is Reykjavík. Reykjavík and the surrounding areas in the southwest of the country are home to over two-thirds of the population. ',
        duration: 10,
        price: 1000,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/7f616a638590161024c658945c4ce5e7-full.jpg'
    },
    {
        id:7,
        title: 'Scotland',
        description: 'Scotland is a country that is part of the United Kingdom. Covering the northern third of the island of Great Britain,mainland Scotland has a 96-mile (154 km) border with England to the southeast and is otherwise surrounded by the Atlantic Ocean to the north and west, the North Sea to the northeast and the Irish Sea to the south. The country also contains more than 790 islands.',
        duration: 6,
        price: 900,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/6cc8f7144f825893c4bf1d0a0b92feac-full.jpg'
    },
    {
        id:8,
        title: 'Mexico',
        description: 'Mexico is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.Mexico covers 1,972,550 square kilometers, making it the world\'s 13th-largest country by area.',
        duration: 11,
        price: 1100,
        image:'https://cdn1.savepice.ru/uploads/2021/12/24/328b7e369a70a48eb7c7b2175f290741-full.jpg'
    },
    {
        id:9,
        title: 'Brazil',
        description: 'Brazil,officially the Federative Republic of Brazil,is the largest country in both South America and Latin America. At 8.5 million square kilometers  and with over 211 million people, Brazil is the world\'s fifth-largest country by area and the sixth most populous. Its capital is Brasília, and its most populous city is São Paulo.  ',
        duration: 10,
        price: 1200,
        image:'https://cdn1.savepice.ru/uploads/2021/12/24/ef66ac9658c2dbdaa474798683091497-full.jpg'
    },
    {
        id:10,
        title: 'Italy',
        description: 'Italy is a country consisting of a peninsula delimited by the Alps and several islands surrounding it, whose territory largely coincides with the homonymous geographical region. Italy is located in the centre of the Mediterranean Sea, in Southern Europe, and is also considered part of Western Europe. ',
        duration: 7,
        price: 800,
        image: 'https://cdn1.savepice.ru/uploads/2021/12/24/344f7169421e8617b97cb83b23164661-full.jpg'
    }
]


    class PostController {

    async getPosts(req, res) {
        return res.json(posts)
    }

    async deletePost(req, res) {
        const index = posts.findIndex(post => post.id === req.params.id)
        posts.splice(index, 1)
        return res.json(posts)
    }

    async getOne(req, res) {
        const {id} = req.params
        const post = posts.find(post => post.id === id)
        return res.json(post)
    }

    async postPost(req, res) {
        try {
            posts.push({...req.body})
            return res.json(posts)
        } catch (e) {
            console.log(e)
            return res.json(null)
        }

    }

}

module.exports = new PostController()
