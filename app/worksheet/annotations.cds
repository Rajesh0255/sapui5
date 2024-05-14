using CatalogService as service from '../../srv/cat-service';
annotate service.Author_details with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'author_name',
                Value : author_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'author_email',
                Value : author_email,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'author_name',
            Value : author_name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'author_email',
            Value : author_email,
        },
    ],
);

