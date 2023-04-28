const request = require('supertest');

const baseURL = "http://localhost:5000";

describe('POST /api/add_home', () => {
    test('should return status 200 for successfull registration', async () => {
        const req = {
            body: {
                "year": "2017",
                "img": "img_2018",
                "WelcomeContent": {
                    "title": "Welcome_content_title_2021",
                    "content": " Welcome_content_content_2021"
                },
                "content": {
                    "keyNoteSpeakers": {
                        "title": "content_keynotespeakers_title_2021",
                        "list": [
                            {
                                "text": "content_keynotespeakers_list_text_2021",
                                "link": "content_keynotespeakers_list_link_2021"
                            },
                            {
                                "text": "content_keynotespeakers_list_text_2021_2",
                                "link": "content_keynotespeakers_list_link_2021_2"
                            }
                        ]
                    },
                    "invitedSpeakers": {
                        "title": "content_invitedspeakers_title_2021",
                        "list": [
                            {
                                "text": "content_invitedspeakers_list_text_2021",
                                "link": "content_invitedspeakers_list_link_2021"
                            },
                            {
                                "text": "content_invitedspeakers_list_text_2021_2",
                                "link": "content_invitedspeakers_list_link_2021_2"
                            }
                        ]
                    },
                    "tracks": {
                        "title": "content_tracks_title_2021",
                        "list": [
                            {
                                "text": "trackdev123",
                                "link": "jaymataji"
                            }
                        ]
                    },
                    "tutorials": {
                        "title": "content_tutorials_title_2021",
                        "list": [
                            {
                                "text": "content_tutorials_list_text_2021",
                                "link": "content_tutorials_list_link_2021"
                            },
                            {
                                "text": "content_tutorials_list_text_2021_2",
                                "link": "content_tutorials_list_link_2021_2"
                            }
                        ]
                    }
                }
            }
        };
        const res = await request(baseURL).post('/api/add_home').send(req.body);
        expect(res.status).toEqual(200);
    });

    test('should return status 300 for unsuccessfull registration', async () => {
        const req = {
            body: {
                "year": "2020",
                "img": "img_2019",
                "WelcomeContent": {
                    "title": "Welcome_content_title_2021",
                    "content": " Welcome_content_content_2021"
                },
                "content": {
                    "keyNoteSpeakers": {
                        "title": "content_keynotespeakers_title_2021",
                        "list": [
                            {
                                "text": "content_keynotespeakers_list_text_2021",
                                "link": "content_keynotespeakers_list_link_2021"
                            },
                            {
                                "text": "content_keynotespeakers_list_text_2021_2",
                                "link": "content_keynotespeakers_list_link_2021_2"
                            }
                        ]
                    },
                    "invitedSpeakers": {
                        "title": "content_invitedspeakers_title_2021",
                        "list": [
                            {
                                "text": "content_invitedspeakers_list_text_2021",
                                "link": "content_invitedspeakers_list_link_2021"
                            },
                            {
                                "text": "content_invitedspeakers_list_text_2021_2",
                                "link": "content_invitedspeakers_list_link_2021_2"
                            }
                        ]
                    },
                    "tracks": {
                        "title": "content_tracks_title_2021",
                        "list": [
                            {
                                "text": "trackdev123",
                                "link": "jaymataji"
                            }
                        ]
                    },
                    "tutorials": {
                        "title": "content_tutorials_title_2021",
                        "list": [
                            {
                                "text": "content_tutorials_list_text_2021",
                                "link": "content_tutorials_list_link_2021"
                            },
                            {
                                "text": "content_tutorials_list_text_2021_2",
                                "link": "content_tutorials_list_link_2021_2"
                            }
                        ]
                    }
                }
            }
        };
        const res = await request(baseURL).post('/api/add_home').send(req.body);
        expect(res.status).toEqual(300);
    });
});


