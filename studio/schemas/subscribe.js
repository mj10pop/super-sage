export default {
    "type": "document",
    "name": "subscribe",
    "title": "Subscribe",
    "fields": [
        {
            "type": "boolean",
            "name": "enabled",
            "title": "Enable Subscribe Section",
            "description": "Display the newsletter subscription section in the footer.",
            "initialValue": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the subscribe section",
            "validation": null
        },
        {
            "type": "string",
            "name": "content",
            "title": "Content",
            "description": "The text content of the subscribe section",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Subscribe File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_data/subscribe.json"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}