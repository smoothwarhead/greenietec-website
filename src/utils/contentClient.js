export const homeQuery = `
    {
        homeCollection{
            items{
                topHeading,
                subHeading,
                note
            }
        }
    }
`;

export const servicesQuery = `
    {
        servicesCollection{
            items{
                topHeading,
                subHeading,
                note,
                subNote
            }
        }
        serviceCollection{
            items{
                name,
                elements,
                note,
                slug
            }
        }
    }
`
export const workQuery = `
    {
        workPageCollection{
            items{
                topHeading,                
                note                
            }
        }
        workCollection{
            items{
                name,
                year,
                techs,
                slug,
                status,
                href
            }
        }
    }
`;

export const contactQuery = `
    {
        contactPageCollection{
            items{
                topHeading,                
                note,
                email,
                address,
                phone               
            }
        }
  
    }
`;