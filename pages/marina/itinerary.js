import { Box, Heading } from '@chakra-ui/react'
import { Section, SectionImage, Paragraph } from '../../components/trip'
import Layout from '../../components/layouts/article'
import { Bread } from '../../components/items'

const Tours = () => {
  return (
    <Layout title="Tour">
      <Box>
        <Bread title="Itinerary" isMarina />
        <Heading mb={4} textAlign="center">
          Experience Croatia
        </Heading>

        <Heading variant="trip-day">Day 1</Heading>
        <Section>
          <Paragraph>
            We arrive, buy provisions and settle on the ship. After our team has
            introduced themselve everyone is ready for adventure. We will spend
            our first day in the open sea, enjoying exceptional clear water and
            sun. We will stay at the bay of Stoja for the night.
          </Paragraph>
          <SectionImage id={1} alt="Stoja" />
        </Section>

        <Heading variant="trip-day">Day 2</Heading>
        <Section>
          <Paragraph>
            The itinerary of this day includes a stop at the Lim bay. This is
            not only a stunningly beautiful passage surrounded by green
            mountains called the Croatian Fjords, but also a visit to an oyster
            farm. It is here, according to independent experts, that the highest
            quality oysters in Croatia are grown. In a quiet bay next to the
            farm, there is a local restaurant where we will spend the evening
            enjoying the gifts of the oyster farm.
          </Paragraph>
          <SectionImage id={2} alt="Lim Bay" />
        </Section>

        <Heading variant="trip-day">Day 3</Heading>
        <Section>
          <Paragraph>
            Visit to the city of Vrsar. On our way we will swim and even dive.
            All the necessary equipment is on board - masks, fins and glanders.
            In the evening, we will stroll through the streets of this amazing
            city. We will climb to its highest point, where an incredible view
            of the sea, islands and all nearby territories opens. This is the
            place of the most beautiful photos and as practice has shown, it is
            better to take them before dark.
          </Paragraph>
          <SectionImage id={3} alt="Vrsar" />
        </Section>

        <Heading variant="trip-day">Day 4</Heading>
        <Section>
          <Paragraph>
            We move on to another unique city of Porec, rich in monuments of
            ancient architecture, such as the Euphrasian Basilica with Byzantine
            mosaics of the 4th century, the Round Tower of the 15th century and
            others. Cozy restaurants and noisy bars, an elegant embankment -
            everything here contributes to a pleasant Mediterranean evening.
          </Paragraph>
          <SectionImage id={4} alt="Porec" />
        </Section>

        <Heading variant="trip-day">Day 5</Heading>
        <Section>
          <Paragraph>
            We will leave our ship and explore the wild island, swim and have a
            barbecue. The crown of our route will be the city of Rovinj, located
            on the peninsula. While walking you will have a feeling of being
            somewhere in Italy. It is not surprising because it has long been
            called the Croatian Venice. Climbing up the narrow, cobbled streets
            to the Cathedral of St. Euphemia, we will have a new amazing view.
            And holding the Golden Hour here will definitely not leave anyone
            indifferent.
          </Paragraph>
          <SectionImage id={5} alt="Rovinj" />
        </Section>

        <Heading variant="trip-day">Day 6</Heading>
        <Section>
          <Paragraph>
            This final day we will spend in the wild bay, sunbathing and
            swimming, resting from a busy week. A new view will open from the
            yacht, with a steep coast, from the rocks of which you can jump into
            the water from different heights and a long cave crowned with a
            stone hall - the end point for the most fearless.
          </Paragraph>
          <SectionImage id={6} alt="Cave" />
        </Section>

        <Heading variant="trip-day">Day 7</Heading>
        <Section>
          <Paragraph>
            On an uninhabited island, we dive into the depths of an underwater
            gorge.
          </Paragraph>
          <SectionImage id={7} alt="Frascher Grande" />
        </Section>
      </Box>
    </Layout>
  )
}

export default Tours
export { getServerSideProps } from '../../components/chakra'
