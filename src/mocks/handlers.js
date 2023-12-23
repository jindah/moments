import { rest } from "msw";

const baseURL = 'https://drfapinew-d3d8cbc7f33b.herokuapp.com/';

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
      return res(
        ctx.json({
            "pk": 1,
            "username": "gitpod",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 1,
            "profile_image": "https://res.cloudinary.com/dlyfk3k2j/image/upload/v1/media/../default_profile"
          })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];