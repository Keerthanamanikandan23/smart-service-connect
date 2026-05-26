import { Link } from 'react-router-dom'

function Services() {

  const categories = [

    {
      name: 'Electrician',
      image:
        'https://images.unsplash.com/photo-1621905252507-b35492cc74b4',
      description:
        'Professional electrical repair and installation services.',
    },

    {
      name: 'Plumber',
      image:
        'https://images.unsplash.com/photo-1581578731548-c64695cc6952',
      description:
        'Expert plumbing and pipe maintenance solutions.',
    },

    {
      name: 'Cleaner',
      image:
        'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac',
      description:
        'Deep cleaning and sanitization services for homes.',
    },

    {
      name: 'Tutor',
      image:
        'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      description:
        'Personalized tutoring for school and college students.',
    },

    {
      name: 'Painter',
      image:
        'https://images.unsplash.com/photo-1562259949-e8e7689d7828',
      description:
        'Professional home and office painting services.',
    },

    {
      name: 'Technician',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a',
      description:
        'AC repair and appliance maintenance services.',
    },

  ]

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-center text-blue-600 mb-14">
        Service Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {categories.map((category, index) => (

          <Link
            key={index}
            to={`/services/${category.name.toLowerCase()}`}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            <img
              src={category.image}
              alt={category.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h2 className="text-3xl font-bold mb-4">
                {category.name}
              </h2>

              <p className="text-gray-600">
                {category.description}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  )
}

export default Services